import {contractionRules} from "./contractions_rules";
import {lexicon} from "en-lexicon";

/**
 * Remove all contractions
**/
export function resolveContractions(string:string):string{
	contractionRules.forEach((rule)=>{
		string = string.replace(rule.regex,rule.replacement);
	});
	return string.replace(/\s+/g," ");
}

/**
 * Remove confusables characters
**/
export function replaceConfusables(string:string):string{
	return string
	.replace(/[｀΄＇ˈˊᑊˋꞌᛌ‘’י՚‛՝`'′׳´ʹ˴ߴ‵ߵʻʼ᾽ʽ῾ʾ᾿]/g,"'")
	.replace(/["＂〃ˮײ᳓″״‶˶ʺ“”˝‟]/g,'"');
}

/**
 * normalize capitalization
**/
export function normalizeCaps(tokens:string[]):string[]{
	// normalize all caps sentences
	if(isAllCaps(tokens.join(""))) {
		tokens = tokens.map((token)=>{
			if(isProper(token)) return capitalizeFirstChar(token);
			else return token.toLowerCase();
		});
	}
	else if(!isProper(tokens[0])) tokens[0] = tokens[0].toLowerCase();
	return tokens;
}

function capitalizeFirstChar(string:string):string{
	return string.charAt(0).toUpperCase() + string.substr(1).toLowerCase();
}

function isAllCaps(string:string):boolean {
	const sentenceLength = string.length;
	const capsLetters = string.split(/[A-Z]/).length;
	return Math.round((capsLetters*100)/sentenceLength) > 50;
}

function isProper(string:string):boolean{
	if((lexicon[capitalizeFirstChar(string)]||"").startsWith("NNP") || (lexicon[string]||"").startsWith("NNP")) return true;
	else return false;
}