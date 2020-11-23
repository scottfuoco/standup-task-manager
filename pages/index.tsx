import Head from 'next/head'
import { useState } from 'react'

import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd'

const Home: React.FC = () => {
  const data = [
    {
      id: '1',
      content: 'First Item',
    },
    {
      id: '2',
      content: 'Second Item',
    },
    {
      id: '3',
      content: 'Third Item',
    },
    {
      id: '4',
      content: 'Fourth Item',
    },
  ]
  const [todos, setTodos] = useState(data)

  function onDragEnd(result: DropResult): void {
    // return if dropped outside of a droppable context
    if (!result.destination) return

    const items = [...todos]
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index ?? 0, 0, reorderedItem)

    setTodos(items)
  }

  return (
    <>
      <Head>
        <title>NextJS Starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container flex-1 mx-auto bg-green-400">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="todo">
            {(provided) => (
              <ul ref={provided.innerRef} {...provided.droppableProps}>
                {todos.map(({ id, content }, index) => (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided, snapshot) => (
                      <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                        <div
                          className={`${snapshot.isDragging ? 'active' : ''}
                        bg-blue-800 active:bg-green-700`}
                        >
                          {content}
                        </div>
                      </li>
                    )}
                  </Draggable>
                ))}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </main>
    </>
  )
}

export default Home
