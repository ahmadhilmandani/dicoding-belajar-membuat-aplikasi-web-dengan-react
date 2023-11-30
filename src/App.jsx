/* eslint-disable no-unused-vars */
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navigation from './components/Navigation'
import Button from './components/Button'
import Card from './components/Card'
import moment from "moment"

function App() {
  const [notes, setNote] = useState(
    [
      {
        id: 1,
        title: "Lifecycle",
        body: "Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya. ",
        isArchived: false,
        createdAt: '2022-04-14T04:27:34.572Z'
      },
      {
        id: 2,
        title: "ESM",
        body: "ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.",
        isArchived: false,
        createdAt: '2023-07-14T04:27:34.572Z'
      },
      {
        id: 3,
        title: "Melupakannya",
        body: "Mending berharap yang terbaik, lebih menenangkan",
        isArchived: true,
        createdAt: '2020-01-01T04:27:34.572Z'
      }
    ]
  )

  function changeArchived(paramsId) {
    console.log("test")
    const newNotes = notes.map(note => {
      if (note.id !== paramsId) {
        return note;
      } else {
        // Return a new circle 50px below
        return {
          ...note,
          isArchived: !note.isArchived,
        };
      }
    });
    setNote(newNotes)
  }

  return (
    <div className="w-full min-h-screen bg-cust-white p-6 relative">
      <Navigation />
      <main className='mt-12'>
        <section className='max-w-md mx-auto'>
          <h1 className='mb-4'>Buat Catatan</h1>
          <input type="text" className="outline-0 bg-cust-light-gray rounded-lg px-4 py-2 text-sm w-full border focus:outline-1 outline-cust-blue focus:border-cust-blue" placeholder="Judul catatan... ✨" />
          <textarea name="" id="" cols="30" rows="10" className="outline-0 bg-cust-light-gray rounded-lg px-4 py-2 text-sm w-full border focus:outline-1 outline-cust-blue focus:border-cust-blue mt-4 mb-4" placeholder='tulis deksripsi catatan... 📝'></textarea>
          <Button isPrimary>
            Tambah 🫰
          </Button>
        </section>
        <section className='mt-10'>
          <div>
            <h1 className='mb-4'>Catatan aktif</h1>
            <div className='flex gap-4'>
              {notes.map((note) => {
                if (note.isArchived != true) {
                  return (
                    <Card
                      noteId={note.id}
                      changeArchived={changeArchived}
                      title={note.title}
                      createdAt={moment(note.createdAt).format("DD-MM-YYYY")}
                      key={note.id} >
                      {note.body}
                    </Card>
                  )
                }
              })}
            </div>
          </div>
          <div className='mt-4'>
            <h1 className='mb-4'>Arsip</h1>
            <div className='flex gap-4'>
              {notes.map((note) => {
                if (note.isArchived) {
                  return (
                    <Card
                      noteId={note.id}
                      changeArchived={changeArchived}
                      title={note.title}
                      createdAt={moment(note.createdAt).format("DD-MM-YYYY")}
                      key={note.id} >
                      {note.body}
                    </Card>
                  )
                }
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
