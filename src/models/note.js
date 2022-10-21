import { DataStore } from '@aws-amplify/datastore';
import { Note } from './models';

await DataStore.save(
    new Note({
		"name": "Lorem ipsum dolor sit amet",
		"description": "Lorem ipsum dolor sit amet"
	})
);