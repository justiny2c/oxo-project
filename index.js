class City {
  /* The constructor takes in a list of data points representing the city, 
    where each data point takes the form (12-digit-geohash, curb_designation). 
    Store this data inside the class and perform any other work you need to do 
    for the other two methods in this class. Your goal here is to store the data 
    in a format that makes your search function accurate and time efficient.
    */
  constructor(data) {
    this.data = data;
  }

  /* @params: address-the user's entered dropoff address’s 12-digit-geohash
    This method should search around “address” for the best curb spaces available. 
    @returns: array of top 10 curb spaces close to passed address (as mentioned above, 
    you’ll need to design a metric which takes into account (a) distance from address 
    and (b) curb_designation value.
    */

  search = address => {
    // address is a 12-digit-geohash
    // assuming the array data is sorted by geohashes,
    // determine the next closest geohashes in the array data (100K data points)

    // if data is not sorted, incorporate a quickSort function

    let address_index = null;
    let range_of_hashes = [];
    // first, find the geohash in data
    for (var i = 0; i < this.data.length; i++) {
      if (this.data[i].geohash === address) {
        address_index = i;
      }
    }

    //once we find the index, grab the previous 4 and next 5 data points, and store them
    let range_of_hashes = [];
    while (range_of_hashes.length <= 10) {
      for (var i = -4; i < 5; i++) {
        // define geohash_start
        // distance between two geohashes

        let geohash_start = office_address;
        let geohash_end = this.data[address_index + i][geohash];
        let distance = GoogleMaps.getDistance(geohash_start, geohash_end);

        let metric = distance * this.data[address_index + i][curb_designation];
        range_of_hashes.push[(metric, geohash_end)];
      }
    }

    // return sorted array of metric values
    return range_of_hashes.sort();
  };

  /* params: location -- a well-formed input (12-digit-geohash, curb_designation). 
    Update should take this information and update the data structure you initialized 
    in the City constructor. This function will either update the curb_designation 
    for an existing data point, or will insert a new data point. As an example, 
    imagine a user reports that a parking spot now has a hydrant. 
    returns: void
    */

  // update(location){

  // }
}
