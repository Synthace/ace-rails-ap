define("ace/snippets/antha",["require","exports","module"], function(require, exports, module) {
"use strict";

exports.snippetText = "# append\n\
snippet ap\n\
	append(${1:slice}, ${2:value})\n\
# bool\n\
snippet bl\n\
	bool\n\
# byte \n\
snippet bt\n\
	byte\n\
# break\n\
snippet br\n\
	break\n\
# channel\n\
snippet ch\n\
	chan ${1:int}\n\
# case\n\
snippet cs\n\
	case ${1:value}:\n\
		${2:/* code */}\n\
# const\n\
snippet c\n\
	const ${1:NAME} = ${2:0}\n\
# constants with iota\n\
snippet co\n\
	const (\n\
		${1:NAME1} = iota\n\
		${2:NAME2}\n\
	)\n\
# continue\n\
snippet cn\n\
	continue\n\
# defer \n\
snippet df\n\
	defer ${1:func}()\n\
# defer recover\n\
snippet dfr\n\
	defer func() {\n\
		if err := recover(); err != nil {\n\
			${1:/* code */}\n\
		}\n\
	}()\n\
# gpl\n\
snippet gpl\n\
	/*\n\
	 * This program is free software; you can redistribute it and/or modify\n\
	 * it under the terms of the GNU General Public License as published by\n\
	 * the Free Software Foundation; either version 2 of the License, or\n\
	 * (at your option) any later version.\n\
	 *\n\
	 * This program is distributed in the hope that it will be useful,\n\
	 * but WITHOUT ANY WARRANTY; without even the implied warranty of\n\
	 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n\
	 * GNU General Public License for more details.\n\
	 *\n\
	 * You should have received a copy of the GNU General Public License\n\
	 * along with this program; if not, write to the Free Software\n\
	 * Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA 02111-1307, USA.\n\
	 *\n\
	 * Copyright (C) ${1:Author}, `strftime(\"%Y\")`\n\
	 */\n\
	\n\
	${2}\n\
# int\n\
snippet i\n\
	int\n\
# import \n\
snippet im\n\
	import (\n\
		\"${1:package}\" \n\
	)\n\
# interface \n\
snippet in\n\
	interface{}\n\
# full interface snippet \n\
snippet inf\n\
	interface ${1:name} {\n\
		${2:/* methods */}\n\
	}${3}\n\
# if condition\n\
snippet if\n\
	if ${1:/* condition */} {\n\
		${2:/* code */}\n\
	}\n\
# else snippet\n\
snippet el\n\
	else {\n\
		${1}\n\
	}\n\
# error snippet\n\
snippet ir\n\
	if err != nil {\n\
		return err\n\
	}\n\
	${1}\n\
# false\n\
snippet f\n\
	false\n\
# fallthrough\n\
snippet ft\n\
	fallthrough\n\
# float\n\
snippet fl\n\
	float32\n\
# float32\n\
snippet f3\n\
	float32\n\
# float64\n\
snippet f6\n\
	float64\n\
# if else\n\
snippet ie\n\
	if ${1:/* condition */} {\n\
		${2:/* code */}\n\
	} else {\n\
		${3}\n\
	}\n\
# for loop\n\
snippet fo\n\
	for ${2:i} = 0; $2 < ${1:count}; $2${3:++} {\n\
		${4:/* code */}\n\
	}\n\
# for range loop\n\
snippet fr\n\
	for ${1:k}, ${2:v} := range ${3} {\n\
		${4:/* code */}\n\
	}\n\
# function simple \n\
snippet fun\n\
	func ${1:funcName}(${2}) ${3:os.Error} {\n\
		${4:/* code */}\n\
	}\n\
# function on receiver \n\
snippet fum\n\
	func (self ${1:type}) ${2:funcName}(${3}) ${4:os.Error} {\n\
		${5:/* code */}\n\
	}\n\
# make\n\
snippet mk\n\
	make(${1:[]string}, ${2:0})\n\
# map \n\
snippet mp\n\
	map[${1:string}]${2:int}\n\
# main()\n\
snippet main\n\
	func main() {\n\
		${1:/* code */}\n\
	}\n\
# new\n\
snippet nw\n\
	new(${1:type})\n\
# panic \n\
snippet pn\n\
	panic(\"${1:msg}\")\n\
# print\n\
snippet pr\n\
	fmt.Printf(\"${1:%s}\\n\", ${2:var})${3}\n\
# range \n\
snippet rn\n\
	range ${1}\n\
# return \n\
snippet rt\n\
	return ${1}\n\
# result \n\
snippet rs\n\
	result\n\
# select\n\
snippet sl\n\
	select {\n\
	case ${1:v1} := <-${2:chan1}\n\
		${3:/* code */}\n\
	case ${4:v2} := <-${5:chan2}\n\
		${6:/* code */}\n\
	default:\n\
		${7:/* code */}\n\
	}\n\
# string\n\
snippet sr\n\
	string\n\
# struct\n\
snippet st\n\
	struct ${1:name} {\n\
		${2:/* data */}\n\
	}${4}\n\
# switch \n\
snippet sw\n\
	switch ${1:var} {\n\
	case ${2:value1}:\n\
		${3:/* code */}\n\
	case ${4:value2}:\n\
		${5:/* code */}\n\
	default:\n\
		${6:/* code */}\n\
	}\n\
snippet sp\n\
	fmt.Sprintf(\"${1:%s}\", ${2:var})${3}\n\
# true \n\
snippet t\n\
	true\n\
# variable declaration\n\
snippet v\n\
	var ${1:t} ${2:string}\n\
";
exports.scope = "antha";

});
