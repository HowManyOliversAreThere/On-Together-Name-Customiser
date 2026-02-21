import { test } from "uvu";
import * as assert from "uvu/assert";
import { extractName, replaceName } from "../src/lib/player-data.ts";

// ---------------------------------------------------------------------------
// extractName
// ---------------------------------------------------------------------------

test("extractName - simple uncoloured name", () => {
  const data = '{"Name":"Oliver","Location":"here"}';
  assert.is(extractName(data), "Oliver");
});

test("extractName - name with TMP colour tags", () => {
  const data =
    '{"Name":"</color><color=#FF0000>Red</color><color=#00FF00><color=#0000FF>","Other":"x"}';
  assert.is(
    extractName(data),
    "</color><color=#FF0000>Red</color><color=#00FF00><color=#0000FF>"
  );
});

test("extractName - name containing escaped quotes", () => {
  const data = '{"Name":"\\"Tony\\"","Location":"here"}';
  assert.is(extractName(data), '"Tony"');
});

test("extractName - name containing backslash", () => {
  const data = '{"Name":"back\\\\slash","Loc":"x"}';
  assert.is(extractName(data), "back\\slash");
});

test("extractName - empty name", () => {
  const data = '{"Name":"","Loc":"x"}';
  assert.is(extractName(data), "");
});

test("extractName - no Name field returns null", () => {
  const data = '{"Location":"here"}';
  assert.is(extractName(data), null);
});

test("extractName - real PlayerData file", () => {
  const data =
    '{"TodoDatas":[],"Name":"</color><b><color=#FFE3B3>F</color><color=#FFDAAE>r</color><color=#FFD1AA>e</color><color=#FFC9A5>y</color><color=#FFC2A1>a</color><color=#FFC2CD>a</color><color=#FFE3B3><color=#EEEEEE></b>","DateOfBirth":"whatever"}';
  assert.is(
    extractName(data),
    "</color><b><color=#FFE3B3>F</color><color=#FFDAAE>r</color><color=#FFD1AA>e</color><color=#FFC9A5>y</color><color=#FFC2A1>a</color><color=#FFC2CD>a</color><color=#FFE3B3><color=#EEEEEE></b>"
  );
});

// ---------------------------------------------------------------------------
// replaceName
// ---------------------------------------------------------------------------

test("replaceName - simple replacement", () => {
  const data = '{"Name":"Oliver","Location":"here"}';
  const result = replaceName(data, "NewName");
  assert.is(result, '{"Name":"NewName","Location":"here"}');
});

test("replaceName - replaces with TMP tags", () => {
  const data = '{"Name":"Oliver","Location":"here"}';
  const tags = "</color><color=#FF0000>N</color><color=#00FF00><color=#0000FF>";
  const result = replaceName(data, tags);
  assert.is(
    result,
    `{"Name":"</color><color=#FF0000>N</color><color=#00FF00><color=#0000FF>","Location":"here"}`
  );
});

test("replaceName - replaces existing TMP tags with new ones", () => {
  const data =
    '{"Name":"</color><color=#FF0000>Old</color><color=#FFFFFF><color=#FFFFFF>","Loc":"x"}';
  const newTags =
    "</color><color=#00FF00>New</color><color=#AABBCC><color=#112233>";
  const result = replaceName(data, newTags);
  assert.is(
    result,
    '{"Name":"</color><color=#00FF00>New</color><color=#AABBCC><color=#112233>","Loc":"x"}'
  );
});

test("replaceName - preserves rest of file exactly", () => {
  const data =
    '{"TodoDatas":[{"ListName":"Test","Texts":["a"],"IsDones":[false]}],"Name":"X","SecondsPlayed":110514.91778665443}';
  const result = replaceName(data, "Y");
  assert.is(
    result,
    '{"TodoDatas":[{"ListName":"Test","Texts":["a"],"IsDones":[false]}],"Name":"Y","SecondsPlayed":110514.91778665443}'
  );
});

test("replaceName - handles name with escaped quotes", () => {
  const data = '{"Name":"\\"Tony\\"","Location":"here"}';
  const result = replaceName(data, "NewName");
  assert.is(result, '{"Name":"NewName","Location":"here"}');
});

test("replaceName - new name containing quotes gets escaped", () => {
  const data = '{"Name":"Oliver","Loc":"x"}';
  const result = replaceName(data, '"Quoted"');
  assert.is(result, '{"Name":"\\"Quoted\\"","Loc":"x"}');
});

test("replaceName - new name containing backslash gets escaped", () => {
  const data = '{"Name":"Oliver","Loc":"x"}';
  const result = replaceName(data, "back\\slash");
  assert.is(result, '{"Name":"back\\\\slash","Loc":"x"}');
});

test("replaceName - no Name field returns null", () => {
  const data = '{"Location":"here"}';
  assert.is(replaceName(data, "X"), null);
});

test("replaceName - empty name replaced", () => {
  const data = '{"Name":"","Loc":"x"}';
  const result = replaceName(data, "Hello");
  assert.is(result, '{"Name":"Hello","Loc":"x"}');
});

test("replaceName - replace with empty name", () => {
  const data = '{"Name":"Oliver","Loc":"x"}';
  const result = replaceName(data, "");
  assert.is(result, '{"Name":"","Loc":"x"}');
});

test("replaceName - full PlayerData round-trip", () => {
  // Simulate a real file: extract old name, replace with new
  const original =
    '{"TodoDatas":[{"ListName":"Dev","Texts":["Fix cloudflare API redirect"],"IsDones":[false]}],"Name":"</color><b><color=#FFE3B3>F</color><color=#FFDAAE>r</color></b>","DateOfBirth":"whatever","SecondsPlayed":110514.91778665443}';
  const oldName = extractName(original);
  assert.ok(oldName !== null);

  const newTags =
    "</color><color=#AABBCC>Te</color><color=#112233><color=#445566>";
  const modified = replaceName(original, newTags);
  assert.ok(modified !== null);

  // The new name should be in the modified file
  const extracted = extractName(modified!);
  assert.is(extracted, newTags);

  // The rest of the file should be untouched
  assert.ok(modified!.includes('"SecondsPlayed":110514.91778665443'));
  assert.ok(modified!.includes('"Fix cloudflare API redirect"'));
});

test("replaceName - only replaces Name, not other fields containing Name substring", () => {
  const data = '{"ListName":"Test","Name":"Oliver","RenameTo":"X"}';
  const result = replaceName(data, "New");
  assert.is(result, '{"ListName":"Test","Name":"New","RenameTo":"X"}');
});

test("extractName - name with angle brackets and equals (TMP tags)", () => {
  // Make sure < > = # characters inside the value are handled
  const data = '{"Name":"<color=#FF0000>Hi</color>"}';
  assert.is(extractName(data), "<color=#FF0000>Hi</color>");
});

test.run();
