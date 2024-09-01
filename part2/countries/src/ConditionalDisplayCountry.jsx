import DisplayCountry from "./DisplayCountry"

const ConditionalDisplayCountry = ({country, show}) => {

    if (show) return <DisplayCountry country={country} />
    else
    return (null)
}

export default ConditionalDisplayCountry