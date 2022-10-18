import './PageHolder.css'
export default function PageHolder({children}) {

  return <div className="page_holder">
        {children}
  </div>
}