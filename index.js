function findMatching(drivers, string) {
    return drivers.filter((driverName)=>
    driverName.toLowerCase() 
    === string.toLowerCase()
    );
}

function fuzzyMatch(drivers, query) {
    return drivers.filter((driverName) =>
    driverName.toLowerCase().startsWith(query.toLowerCase())
    )
}

function matchName(drivers, name) {
    return drivers.filter ((drivers) =>
    drivers.name === name);
}
