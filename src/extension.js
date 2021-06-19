const vscode = require('vscode');

const { map } = require('./items')
console.log(map)


/**
 * @param {string} word
 */
function getInfoINI(word) {
	word = word.toUpperCase()
	return new vscode.Hover(`**Type**: ${map[word].type}\n\n**Default**: ${map[word].default}\n\n**Description**: ${map[word].description}`)
}

function getInfoYML(splitWord) {
	return new vscode.Hover(`**Type**: ${map[splitWord[1]].type}\n\n**Default**: ${map[splitWord[1]].default}\n\n**Description**: ${map[splitWord[1]].description}`)
}

function activate(context) {

	let ymlDisposable = vscode.languages.registerHoverProvider('yml', {
		provideHover(document, position, token) {
			const wordRange = document.getWordRangeAtPosition(position);
			const word = document.getText(wordRange);

			if (word.includes("MURA_")) {
				let splitWord = word.split('_')
				return getInfoYML(splitWord)
			}
		}
	});

	let iniDisposable = vscode.languages.registerHoverProvider('ini', {
		provideHover(document, position, token) {
			const wordRange = document.getWordRangeAtPosition(position);
			const word = document.getText(wordRange);
			
			return getInfoINI(word)
		}
	});

	context.subscriptions.push(iniDisposable, ymlDisposable);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
