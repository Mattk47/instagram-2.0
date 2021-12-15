import { useState, useEffect } from 'react'
import faker from 'faker'
import SuggestedProfile from './SuggestedProfile'
import profilePics from '../utils/profilePics'
function Suggestions() {
    const [suggestions, setSuggestions] = useState([])

    useEffect(() => {
        const suggestions = [...Array(5)].map((_, i) => (
            {
                ...faker.helpers.contextualCard(),
                id: i,
                avatar: profilePics[i]
            }
        ))
        setSuggestions(suggestions)
    }, [])
    console.log(suggestions)
    return (
        <div className="mt-4 ml-10">
            <div className="flex justify-between text-sm mb-5">
                <h3 className="text-sm font-bold text-gray-400">
                    Suggestions for you
                </h3>
                <button className="text-gray-600 font-semibold">See All</button>
            </div>
            {
                suggestions.map(profile => (
                    <SuggestedProfile key={profile.id}
                        avatar={profile.avatar}
                        username={profile.username}
                        companyName={profile.company.name} />
                ))
            }
        </div>
    )
}

export default Suggestions
