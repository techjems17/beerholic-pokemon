import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import $ from 'jquery';

export default Route.extend({
    model() {
        return hash({
            pokemon: $.getJSON("https://cors-anywhere.herokuapp.com/http://pokeapi.co/api/v2/pokemon/"),
            beerList: $.getJSON('beer.json')
        })
    },
});