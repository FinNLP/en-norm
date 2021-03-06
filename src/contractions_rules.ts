
export interface Rule {
	regex:RegExp;
	replacement:string;
};

export const contractionRules:Rule[] = [
	{
		regex:/y'all/gi,
		replacement:" you all "
	},
	{
		regex:/ya'll/gi,
		replacement:" you all "
	},
	{
		regex:/won't've/gi,
		replacement:" will not have "
	},
	{
		regex:/won't/gi,
		replacement:" will not "
	},
	{
		regex:/'dn't've/gi,
		replacement:" would not have "
	},
	{
		regex:/'dn't/gi,
		replacement:" would not "
	},
	{
		regex:/can't/gi,
		replacement:" can not "
	},
	{
		regex:/shan't/gi,
		replacement:" shall not "
	},
	{
		regex:/n't/gi,
		replacement:" not "
	},
	{
		regex:/'ve/gi,
		replacement:" have "
	},
	{
		regex:/'re/gi,
		replacement:" are "
	},
	{
		regex:/'ll/gi,
		replacement:" will "
	},
	{
		regex:/'d/gi,
		replacement:" would "
	},
	{
		regex:/'m/gi,
		replacement:" am "
	},
	{
		regex:/how's/gi,
		replacement:" how is "
	},
	{
		regex:/it's/gi,
		replacement:" it is "
	},
	{
		regex:/(s?)he's/gi,
		replacement:" $1he is "
	},
	{
		regex:/somebody's/gi,
		replacement:" somebody is "
	},
	{
		regex:/let's/gi,
		replacement:" let us ",
	},
	{
		regex:/someone's/gi,
		replacement:" someone is "
	},
	{
		regex:/something's/gi,
		replacement:" something is "
	},
	{
		regex:/that's/gi,
		replacement:" that is "
	},
	{
		regex:/there's/gi,
		replacement:" there is "
	},
	{
		regex:/what's/gi,
		replacement:" what is "
	},
	{
		regex:/where's/gi,
		replacement:" where is "
	},
	{
		regex:/who's/gi,
		replacement:" who is "
	},
	{
		regex:/when's/gi,
		replacement:" when is "
	},
	{
		regex:/why's/gi,
		replacement:" why is "
	},
	{
		regex:/ ol' /,
		replacement:" old "
	},
	{
		regex:/gotta/,
		replacement:" got to ",
	},
	{
		regex:/gonna/,
		replacement:" going to ",
	}
];
export default contractionRules;