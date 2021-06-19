const vscode = require('vscode');

const { map } = require('./items');
console.log(map);

/**
 * @param {string} word
 */
function getInfo(word) {
	word = word.toUpperCase();
	return new vscode.Hover(`## ${word}\n\n**Type**: ${map[word].type}\n\n**Default**: ${map[word].default}\n\n**Description**: ${map[word].description}`);
}

/**
 * @param {{ subscriptions: vscode.Disposable[]; }} context
 */
function activate(context) {

	let ymlDisposable = vscode.languages.registerHoverProvider('yaml', {
		provideHover(document, position) {
			const wordRange = document.getWordRangeAtPosition(position);
			const word = document.getText(wordRange);

			if (word.includes("MURA_")) {
				let splitWord = word.split('_');
				return getInfo(splitWord[1]);
			}
		}
	});

	let iniDisposable = vscode.languages.registerHoverProvider('ini', {
		provideHover(document, position) {
			const wordRange = document.getWordRangeAtPosition(position);
			const word = document.getText(wordRange);
			
			return getInfo(word);
		}
	});

	context.subscriptions.push(iniDisposable, ymlDisposable);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
};
