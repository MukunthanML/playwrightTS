import xlsx from "xlsx";

export default function getExceldataAsJson(excelFilepath) {
  const file = xlsx.readFile(excelFilepath);
  const sheets = file.SheetNames;
  const data = xlsx.utils.sheet_to_json(file.Sheets[sheets[0]]);
  return data;

  //   let res = getExceldataAsJson("./fixtures/testdata.xlsx");

  //   res.map((row) => {
  //     console.log(`${row.username} and ${row.password}`);
  //   });
}
