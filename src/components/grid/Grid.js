import './Grid.scss'

export default function Grid({columns = 1,rows = 1,children }) { // <Grid columns={1} rows ={2}></Grid>

  return <div className={`b_grid_${rows}_${columns}`}>
        {children}
  </div>
}