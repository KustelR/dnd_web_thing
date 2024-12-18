import * as fs from "fs/promises";
import * as path from "path";

async function mirrorTranslations() {
  const localesPath = `./public/locales`;

  const mainLocale = "en";

  const localeDirectories = await fs.readdir(path.join(localesPath), {
    withFileTypes: true,
  });
  const mirrorTargets = localeDirectories.filter(
    (dir) => dir.isDirectory() && dir.name !== mainLocale,
  );

  console.log("mirroring new locale inputs...");

  const files = await fs.readdir(path.join(localesPath, mainLocale));

  files.forEach(async (file) => {
    const origin = await fs.readFile(path.join(localesPath, mainLocale, file), {
      encoding: "utf-8",
    });

    mirrorTargets.forEach(async (target) => {
      try {
        await fs.access(
          path.join(localesPath, target.name, file),
          fs.constants.F_OK,
        );

        const originObject = JSON.parse(origin);
        const targetObject = JSON.parse(
          await fs.readFile(path.join(localesPath, target.name, file), {
            encoding: "utf-8",
          }),
        );
        Object.keys(originObject).forEach((key) => {
          if (
            originObject.hasOwnProperty(key) &&
            targetObject.hasOwnProperty(key)
          ) {
          } else if (
            originObject.hasOwnProperty(key) &&
            !targetObject.hasOwnProperty(key)
          ) {
            console.log(`[UPDATED] ${target.name}/${file} ${key}`);
            targetObject[key] = originObject[key];
          } else {
            throw new Error(
              `Key ${key} exists in ${target.name} locale, but not in master locale`,
            );
          }
        });

        await fs.writeFile(
          path.join(localesPath, target.name, file),
          JSON.stringify(targetObject, null, 2),
          { encoding: "utf-8" },
        );
      } catch (err) {
        if (err == undefined || !err.hasOwnProperty("code")) throw err;
        //@ts-ignore checked for property above. should not crash with obscure information
        if (err.code != "ENOENT") throw err;

        console.log(
          `[NOT FOUND] ${target.name}/${file} locale does not exist. Creating new`,
        );
        fs.writeFile(path.join(localesPath, target.name, file), origin, {
          flag: "as+",
        });
      }
    });
  });
}

mirrorTranslations();
