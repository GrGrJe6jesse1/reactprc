import React from 'react'
import './Blog.css'
import {useState} from 'react';

const Blog = () => {
  const [title, setTitle] = useState([
    "501",
    "502",
    "503"
  ])
  const Name = [
    "아이",
    "에이",
    "여이"
  ]

  const deleteList = (index) => {

  }

  return (
    <div>
      <div className="nav">
        <h1>BLOG</h1>
      </div>
      {
        title.map((item, i)=>{
          return (
            <div className="list">
              <h4>{item}</h4>
              <p>안녕하세요 저는 {Name[i]}입니다</p>
              <button>삭제</button>
            </div>
          )
        })
      }
    </div>
  )
}

function Modal(){
  return (
    <div className="modal">
      <h4>Title</h4>
      <p>Content</p>
      <button>닫기</button>
    </div>
  )
}

export default Blog