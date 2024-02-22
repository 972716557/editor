/**
 * @license Copyright (c) 2014-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic";

import { Alignment } from "@ckeditor/ckeditor5-alignment";
import { Autoformat } from "@ckeditor/ckeditor5-autoformat";
import { Autosave } from "@ckeditor/ckeditor5-autosave";
import {
  Bold,
  Code,
  Italic,
  Strikethrough,
  Subscript,
  Superscript,
  Underline,
} from "@ckeditor/ckeditor5-basic-styles";
import { BlockQuote } from "@ckeditor/ckeditor5-block-quote";
import { CodeBlock } from "@ckeditor/ckeditor5-code-block";
import type { EditorConfig } from "@ckeditor/ckeditor5-core";
import { Essentials } from "@ckeditor/ckeditor5-essentials";
import { FontColor, FontSize } from "@ckeditor/ckeditor5-font";
import { Heading } from "@ckeditor/ckeditor5-heading";
import { HorizontalLine } from "@ckeditor/ckeditor5-horizontal-line";
import {
  AutoImage,
  Image,
  ImageCaption,
  ImageInsert,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
} from "@ckeditor/ckeditor5-image";
import { EditOutlined } from "@ant-design/icons";
import { Indent } from "@ckeditor/ckeditor5-indent";
import { AutoLink, Link, LinkImage } from "@ckeditor/ckeditor5-link";
import { List } from "@ckeditor/ckeditor5-list";
import { MediaEmbed } from "@ckeditor/ckeditor5-media-embed";
import { Paragraph } from "@ckeditor/ckeditor5-paragraph";
import { PasteFromOffice } from "@ckeditor/ckeditor5-paste-from-office";
import { RemoveFormat } from "@ckeditor/ckeditor5-remove-format";
import { SelectAll } from "@ckeditor/ckeditor5-select-all";
import { Table, TableToolbar } from "@ckeditor/ckeditor5-table";
import { Undo } from "@ckeditor/ckeditor5-undo";
import { WordCount } from "@ckeditor/ckeditor5-word-count";

// You can read more about extending the build with additional plugins in the "Installing plugins" guide.
// See https://ckeditor.com/docs/ckeditor5/latest/installation/plugins/installing-plugins.html for details.

class Editor extends ClassicEditor {
  public static override builtinPlugins = [
    Alignment,
    AutoImage,
    AutoLink,
    Autoformat,
    Autosave,
    BlockQuote,
    Bold,
    Code,
    CodeBlock,
    Essentials,
    FontColor,
    FontSize,
    Heading,
    HorizontalLine,
    Image,
    ImageCaption,
    ImageInsert,
    ImageResize,
    ImageStyle,
    ImageToolbar,
    ImageUpload,
    Indent,
    Italic,
    Link,
    LinkImage,
    List,
    MediaEmbed,
    Paragraph,
    PasteFromOffice,
    RemoveFormat,
    SelectAll,
    Strikethrough,
    Subscript,
    Superscript,
    Table,
    TableToolbar,
    Underline,
    Undo,
    WordCount,
  ];

  public static override defaultConfig: EditorConfig = {
    // toolbar: {
    //   items: [
    //     "undo",
    //     "redo",
    //     "removeFormat",
    //     {
    //       label: "123fjaw",
    //       icon: "plus",
    //       tooltip: "Custom tooltip of the drop-down",
    //       items: ["undo"],
    //     },
    //     { label: "undo", icon: false, items: ["undo"] },
    //     // {
    //     //   label: "Drop-down",
    //     //   tooltip: "Custom tooltip of the drop-down",
    //     //   icon: '<glyph glyph-name="spdp" unicode="&#58970;" d="M527.84 676.3199999999999c-113.28-113.28-227.04-226.56-339.84-340.8-0.96-0.96-1.44-1.92-2.4-2.88l244.32-244.32c11.52 9.6 22.56 20.16 33.12 30.72 90.72 95.04 185.28 186.24 277.92 279.36l32.16 32.16-245.28 245.76z m-382.56-403.68c-39.84-91.2-61.44-188.16-80.64-285.6-3.84-19.68 4.32-31.68 21.12-31.68 3.84 0 8.16 0.48 12.96 1.92 70.08 20.64 140.16 41.28 210.24 63.84 21.6 6.72 42.24 15.84 61.92 26.4l-225.6 225.12zM743.36 826.56c-41.28 0-82.08-17.28-117.6-52.8l-48-48 244.8-245.28c19.68 20.16 39.36 39.84 59.04 60 27.84 28.8 40.32 64.32 40.8 119.04 0.96 37.92-24.48 77.76-60.96 113.76-35.52 36-76.8 53.28-118.08 53.28z m194.4-751.68h-361.44c-10.56 0-19.2 8.64-19.2 19.2s8.64 19.2 19.2 19.2h361.44c10.56 0 19.2-8.64 19.2-19.2s-8.64-19.2-19.2-19.2z m0-129.12h-528c-10.56 0-19.2 8.64-19.2 19.2s8.64 19.2 19.2 19.2h528c10.56 0 19.2-8.64 19.2-19.2s-8.64-19.2-19.2-19.2z"  horiz-adv-x="1024" />',
    //     //   items: ["undo"],
    //     // },
    //     "redo",
    //     "|",
    //     "fontSize",
    //     "heading",
    //     "|",
    //     "fontColor",
    //     "bold",
    //     "italic",
    //     "strikethrough",
    //     "underline",
    //     "superscript",
    //     "subscript",
    //     "alignment",
    //     "|",
    //     "bulletedList",
    //     "numberedList",
    //     "|",
    //     "link",
    //     "imageInsert",
    //     "code",
    //     "codeBlock",
    //     "blockQuote",
    //     "insertTable",
    //     "mediaEmbed",
    //   ],
    // },
    language: "zh-cn",
    image: {
      toolbar: [
        "imageTextAlternative",
        "toggleImageCaption",
        "imageStyle:inline",
        "imageStyle:block",
        "imageStyle:side",
        "linkImage",
      ],
    },
    table: {
      contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
    },
  };
}

export default Editor;
