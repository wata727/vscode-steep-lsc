// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { LanguageClient, LanguageClientOptions, ServerOptions } from 'vscode-languageclient';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	const conf = vscode.workspace.getConfiguration("steep-lsc");
	const [command, ...args] = (<[string]>conf.get("commands"));

	const serverOptions: ServerOptions = {
		command: command,
		args: args,
	}

	const clientOptions: LanguageClientOptions = {
		documentSelector: ['ruby', 'steep'],
	};

	const disposable = new LanguageClient("Steep", serverOptions, clientOptions).start()

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
