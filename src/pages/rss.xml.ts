import rss from '@astrojs/rss';
import {getCollection} from 'astro:content';
import type {APIContext} from 'astro';
export async function GET(context:APIContext){
 const notes=await getCollection('notes',({data})=>!data.preview&&!!data.date);
 return rss({title:"Raashid Arquil's Notes",description:'First-hand notes on software, products, and communication.',site:context.site!,items:notes.map(note=>({title:note.data.title,description:note.data.description,pubDate:new Date(note.data.date!),link:`/notes/${note.id}/`}))});
}
