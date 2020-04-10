import { Injectable } from '@angular/core';
import {Place} from './place.model'

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places: Place [] =
  [
    {
      id: '1',
      title: 'Eiffel',
      imageURL: 'https://lh3.googleusercontent.com/proxy/ZDuDTy9RoENXyxCm3rI_ITVFYOlK306sz6RM4vYwq6U5on9K0CXFxCX0qcvR1W2cdnVqJdXNYUSMLs84D0WL4lkzmaK08f2JciUD1wmuVixb',
      comments:['Lugar asombroso']
    },
    {
      id: '2',
      title: 'Estatua Libertad',
      imageURL: 'https://lh3.googleusercontent.com/proxy/ZDuDTy9RoENXyxCm3rI_ITVFYOlK306sz6RM4vYwq6U5on9K0CXFxCX0qcvR1W2cdnVqJdXNYUSMLs84D0WL4lkzmaK08f2JciUD1wmuVixb',
      comments:['Lugar genial']
    }
  ]

  constructor() { }
  getPlaces(){
    return [...this.places]
  }

  getPlace(placeId: string){
    this.places.find(place=> {
      return place.id === placeId
    })
  }

  addPlaces(title: string, imageURL:string)
  {
    this.places.push({
      title,
      imageURL,
      comments:[],
      id: this.places.length + 1 + ""
    });
  
 }
  deletePlaces(placeId: string){
    this.places=this.places.filter(place=>{
      return place.id !==placeId
    } )
  }


}
