import { createPinia, setActivePinia } from "pinia";

const pinia = createPinia();
setActivePinia(pinia);
export default pinia;
export * from './auth.store';
export * from './users.store';
