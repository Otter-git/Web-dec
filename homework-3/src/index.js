import('./index.scss');
import { showItems } from './item';
import items from './items';

const gallery = document.getElementById('items');

items.map(item => gallery.append(showItems(item)));