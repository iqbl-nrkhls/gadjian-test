import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPersonnels } from 'store/reducer/personnel'

const Card = ({ data }) => {
  return (
    <div className="bg-white rounded-lg">
      <div className="flex items-center justify-between gap-2 px-4 py-1 border-b">
        <p className="whitespace-nowrap overflow-hidden">Personnel ID: <span className="text-main">{data.id.value}</span></p>
        <i className="fas fa-ellipsis text-black" />
      </div>
      <div className="flex flex-row md:flex-col gap-2 p-4">
        <img className="rounded-full shrink-0 w-20 md:w-32 md:mx-auto" src={data.picture.thumbnail} alt="" />
        <div className="space-y-1 overflow-hidden">
          <div>
            <p className="text-gray-800 font-semibold text-xs">Name</p>
            <p>{`${data.name.first} ${data.name.last}`}</p>
          </div>
          <div>
            <p className="text-gray-800 font-semibold text-xs">Telephone</p>
            <p>{data.phone}</p>
          </div>
          <div className="hidden md:block">
            <p className="text-gray-800 font-semibold text-xs">Birthday</p>
            <p>{new Date(data.dob.date).toLocaleDateString()}</p>
          </div>
          <div className="hidden md:block">
            <p className="text-gray-800 font-semibold text-xs">Email</p>
            <p>{data.email}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SectionList () {
  const personnel = useSelector(state => state.personnel.data);
  const dispatch = useDispatch();
  const [startIndex, setStartIndex] = useState(0);

  const getPersonnel = async () => {
    await fetch('https://randomuser.me/api/?results=28')
    .then(response => response.json())
    .then(data => dispatch(setPersonnels(data.results)))
  }

  useEffect(() => {
    if (personnel.length === 0) {
      getPersonnel();
    }
  // eslint-disable-next-line
   },[])

   console.log(personnel);

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {personnel.slice(startIndex,startIndex + 4).map((data,i) => (
          <Card key={i} data={data} />
        ))}
      </div>
      <div className="flex justify-center items-center gap-5 py-8">
        <button className="text-black font-semibold disabled:text-gray-400"
        disabled={startIndex <= 0}
        onClick={() => setStartIndex(startIndex - 4)}
        >
          <i className="fas fa-chevron-left" /> Previous Page
        </button>
        <button className="text-black font-semibold disabled:text-gray-400"
          disabled={startIndex >= personnel.length - 4}
          onClick={() => setStartIndex(startIndex + 4)}
        >
          Next Page <i className="fas fa-chevron-right" />
        </button>
      </div>
    </section>
  )
}