export const formatter=new Intl.NumberFormat("en-US",{style:"decimal",maximumFractionDigits:2,currency:"USD"})

function Currency({value}:{value?:string|number}) {
  return (
    <div className="font-semibold">
        {formatter.format(Number(value))}
    </div>
  )
}
export default Currency