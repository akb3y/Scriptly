import React, { useState } from 'react'
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import {useRecoilState} from 'recoil';
import {editedSpeechText, updateTitle} from '../../atoms.jsx';


const MyEditor = () => {
  const [editor] = useState(() => withReact(createEditor()))
  const [tempText, setTemp] = useState('')

  const [editedValue, setEdited] = useRecoilState(editedSpeechText);
  const [titleValue, setTitle] = useRecoilState(updateTitle);

  const initialValue = [
    {
      type: 'paragraph',
      children: [{ text: editedValue }],
    },
  ];

  const titleListener = () => {
    setTitle(event.target.value)
  }


  return (
    <Slate editor={editor} value={initialValue} onChange={(value) => {
      let currentString = '';
      value.forEach((element) => {
        currentString += element.children[0].text;
      })
      setEdited(currentString)
    }}>
      <form>
        <input type='text' placeholder={titleValue} value={titleValue} onChange={titleListener}></input>
      </form>
      <Editable style={{margin: '25px', width: '80vw'}}/>
    </Slate>
  )
}

export default MyEditor;