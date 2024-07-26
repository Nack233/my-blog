"use client"
import React, { useState } from 'react'

function CreatePost() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [genres, setGenres] = useState<string[]>([])
  const [synopsis, setSynopsis] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add your submit logic here
    console.log({ title, content, genres, synopsis })
  }

  const handleGenreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const genre = e.target.value
    if (e.target.checked) {
      setGenres([...genres, genre])
    } else {
      setGenres(genres.filter(g => g !== genre))
    }
  }

  return (
    <div className="bg-white shadow-lg p-6">
      <h1 className="text-4xl font-extrabold mb-8 text-gray-900">Create New Post</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-lg font-medium text-gray-800 mb-2">หัวข้อ</label>
          <input
            type="text"
            id="title"
            value={title}
            placeholder="เขียนหัวข้อที่คุณสนใจ.."
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-3 text-black"
            required
          />
        </div>
        <div>
          <label htmlFor="synopsis" className="block text-lg font-medium text-gray-800 mb-2">บทสรุปโดยย่อ</label>
          <textarea
            id="synopsis"
            value={synopsis}
            placeholder="เกี่ยวกับอะไร"
            onChange={(e) => setSynopsis(e.target.value)}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-3 text-black"
            rows={4}
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-800 mb-2">ประเภท</label>
          <div className="flex flex-wrap gap-4">
            {["Comedy", "Drama", "Fantasy", "Manhwa", "Romance", "School Life", "Shoujo", "Slice of Life"].map((genre) => (
              <div key={genre} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={genre}
                  checked={genres.includes(genre)}
                  onChange={handleGenreChange}
                  id={genre}
                  className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor={genre} className="text-sm text-gray-800">
                  {genre}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div>
          <label htmlFor="content" className="block text-lg font-medium text-gray-800 mb-2">บทความ</label>
          <textarea
            id="content"
            value={content}
            placeholder="บทความที่คุณต้องการเขียน"
            onChange={(e) => setContent(e.target.value)}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-3 text-black"
            rows={8}
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Create Post
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreatePost
