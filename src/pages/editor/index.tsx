/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import React, { useState, useEffect, StrictMode } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import HeadlessEditor from './editor';

function App() {
	const [editor, setEditor] = useState(null);

	return (
		<div className="App">

			<CKEditor
				editor={HeadlessEditor}
				data="<h2>
						Build a dynamite UI from scratch 🧨
					</h2>
					<p>
						CKEditor&nbsp;5 comes with a rich, customizable UI that you can easily adapt to your needs. But it’s an option, not a must! If your app requires a completely new look, you can ditch the UI altogether and <strong>use CKEditor&nbsp;5 as a headless editor</strong>.
					</p>
					<h3>
						Work with React, Vue, Angular, or any other framework
					</h3>
					<p>
						If you take the headless route, the sky is the limit.
					</p>
					<p>
						This demo has an interface developed with <a target='_blank' rel='noopener noreferrer' href='https://ckeditor.com/ckeditor-5/react/'>React</a>, but that’s just an example. With the headless approach, you can develop your perfect UI in <strong>any framework you want</strong>.
					</p>
					<h3>
						Use an existing UI framework or your own design system
					</h3>
					<p>
						A headless editor seamlessly blends with your existing design. This ensures a <strong>consistent user experience</strong>, no matter which UI framework you use.
					</p>
					<p>
						You can easily integrate CKEditor with any solution, including:
					</p>
					<ul>
						<li>
							Bootstrap
						</li>
						<li>
							Material UI
						</li>
						<li>
							Tailwind CSS
						</li>
						<li>
							Or your own design system 💪
						</li>
					</ul>
				"
				onReady={(editor) => {
					setEditor(editor);

					window.editor = editor;
				}}
			/>
		</div>
	);
}


export default App
