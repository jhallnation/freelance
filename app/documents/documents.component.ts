import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html',
  styleUrls: ['documents.component.css']
})
export class DocumentsComponent { 
  pageTitle: string = 'Document Dashboard'
  documents: Document[] = [
    {
      title: 'Doc 1',
      description: 'this is a test',
      file_url: 'http://google.com',
      updated_at: '4/14/17',
      image_url: 'https://cdn.searchenginejournal.com/wp-content/uploads/2016/09/freelancing.jpg',
    },
    {
      title: 'Doc 2',
      description: 'this is a test',
      file_url: 'http://google.com',
      updated_at: '4/14/17',
      image_url: 'http://cdn.moneycrashers.com/wp-content/uploads/2015/07/freelance-computer-918x516.jpg',
    },
    {
      title: 'Doc 3',
      description: 'this is a test',
      file_url: 'http://google.com',
      updated_at: '4/14/17',
      image_url: 'http://i.amz.mshcdn.com/D1KVDG7TAgySlJAyhlQlqeEh7_I=/1200x627/2014%2F11%2F11%2Fbd%2Ffreelancech.02ab9.jpg',
    }
  ]
}