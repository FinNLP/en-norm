/// <reference path="../node_modules/@types/node/index.d.ts" />

import {resolveContractions,replaceConfusables,normalizeCaps} from "../src/index";
import {readFileSync} from "fs";

let errors = 0;

readFileSync(__dirname+"/contractions.txt","utf8").split("\n").forEach((line)=>{
	let input = line.split("\t")[0];
	let expectedResult = line.split("\t")[1];
	let result = resolveContractions(input).trim();

	if(result === expectedResult) {
		console.log("✔ PASSED",input,"=>",expectedResult);
	}
	else {
		console.log("❌ FAIL! We had <",result,"> instead of",expectedResult,"from",input);
		errors++;
	}
});

normalizeCaps(["MY","NAME","IS","ALEX"]).forEach((token)=>{
	if(token.toLowerCase() === token || token === "Alex") {
		console.log("✔ PASSED",token);
	}
	else {
		console.log("❌ Fail",token);
		errors++;
	}
});

if (replaceConfusables("ʽ῾ʾ᾿") === "''''") {
	console.log("✔ confusables replaced");
}
else {
	console.log("❌ Fail",replaceConfusables("ʽ῾ʾ᾿"));
	errors++;
}
if(errors) process.exit(1);
