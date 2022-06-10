const Button = ({ children }) => (
  <button className="bg-main px-4 py-2 text-white active:scale-95 hover:bg-main/90 transition w-full md:w-auto">
    {children}
  </button>
)

const SearchBox = () => (
  <label className="border border-main flex items-center text-main focus-within:ring-main w-full md:w-40">
    <i className="fas fa-magnifying-glass text-lg ml-2" />
    <input type="text" className="p-2 outline-none w-full" placeholder="Find Personnels" />
  </label>
)

export default function SectionTop () {
  return (
    <section className="bg-white p-6 flex flex-col md:flex-row flex-wrap items-center gap-4">
      <div className="grow">
        <h1 className="text-main text-3xl font-bold">PERSONNEL LIST</h1>
        <p className="text-xl font-semibold">List of all personnels</p>
      </div>
      <SearchBox />
      <Button>
        ADD PERSONNEL <i className="fas fa-plus" />
      </Button>
    </section>
  )
}