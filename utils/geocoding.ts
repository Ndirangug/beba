export interface LatLng {
  lat?: number
  lng?: number
}

export const geocode = function (
  location: LatLng,
  geocoder: any,
  onSuccess: (result: string) => void
) {
  geocoder.geocode(
    {
      location,
    },
    (results: any, status: any) => {
      if (status === 'OK') {
        // this.form.origin = results[0].formatted_address
        onSuccess(results[0].formatted_address)
      } else {
        // eslint-disable-next-line no-console
        console.log(
          'Geocode was not successful for the following reason: ' + status
        )
        // setTimeout(() => {
        //   this.fetchAddresses()
        // }, 1000 * this.multiplier)
      }
    }
  )
}
