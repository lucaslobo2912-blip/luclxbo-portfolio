import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const projectFile = (path) => new URL(`../${path}`, import.meta.url);

test("apresenta a identidade e os projetos reais do portfólio", async () => {
  const [page, layout] = await Promise.all([
    readFile(projectFile("app/page.tsx"), "utf8"),
    readFile(projectFile("app/layout.tsx"), "utf8"),
  ]);

  assert.match(layout, /LUCLXBO — Sites, sistemas e IA/);
  assert.match(layout, /og\.png/);
  assert.match(page, /ClubsCenter/);
  assert.match(page, /Zaiko CashGuard/);
  assert.match(page, /Zaiko Studio/);
  assert.match(page, /Jo Moura Concept/);
  assert.match(page, /VIDEOMAKING/);
  assert.match(page, /FOTOGRAFIA/);
});

test("publica o GitHub correto sem referências à conta anterior", async () => {
  const [page, readme, gitignore] = await Promise.all([
    readFile(projectFile("app/page.tsx"), "utf8"),
    readFile(projectFile("README.md"), "utf8"),
    readFile(projectFile(".gitignore"), "utf8"),
  ]);

  assert.match(page, /github\.com\/lucaslobo2912-blip/);
  assert.match(page, /luclxbo-portfolio/);
  assert.doesNotMatch(page, /matheusenzo53|ZAIKO RAID WORLD|FREE-SSQ/i);
  assert.match(readme, /Portfólio Criativo & Tecnologia/);
  assert.match(readme, /Acessar o portfólio ao vivo/);
  assert.match(gitignore, /^\.env\*$/m);
  assert.match(gitignore, /^\/outputs\/$/m);
});

