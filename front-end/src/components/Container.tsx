

export default function Container(props : React.HTMLAttributes<HTMLElement>) {

  const classes = props.className ?? "" 

  return (
    <div className={"container " + classes}>
        { props.children }
    </div>
  )
}
