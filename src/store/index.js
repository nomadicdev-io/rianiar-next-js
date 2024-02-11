const headers = new Headers();
headers.append("X-CSCAPI-KEY", process.env.NEXT_PUBLIC_COUNTRY_API_KEY);

const requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
};

export const getAllCountries = async ()=> {
    try{
        const res = await fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
        const data = await res.json();

        const countryArray = data.map(item=> {
            return {label: item.name, value: item.name, iso2: item.iso2}
        })

        return countryArray;

    }catch(error){
        console.log(error)
    }
}

export const educationdata = [
    {label: 'Senior School ', value: 'Senior School '},
    {label: 'Graduate Diploma', value: 'Graduate Diploma'},
    {label: 'Bachelor Degree', value: 'Bachelor Degree'},
    {label: 'Masters Degree', value: 'Masters Degree'},
    {label: 'Doctoral Degree', value: 'Doctoral Degree'}
]
export const programsData = [
    {label: 'Commercial Pilot License', value: 'Commercial Pilot License'},
    {label: 'Artificial Intelligence In Aerospace', value: 'Artificial Intelligence In Aerospace'},
    {label: 'Private Pilot License', value: 'Private Pilot License'},
    {label: 'Multi-Engine Rating', value: 'Multi-Engine Rating'},
    {label: 'Type Rating', value: 'Type Rating'},
    {label: 'Cabin Crew', value: 'Cabin Crew'},
    {label: 'Aircraft Maintenance Engineer', value: 'Aircraft Maintenance Engineer'}
]