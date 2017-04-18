"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let DocumentsComponent = class DocumentsComponent {
    constructor() {
        this.pageTitle = 'Document Dashboard';
        this.documents = [
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
        ];
    }
};
DocumentsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'documents',
        templateUrl: 'documents.component.html',
        styleUrls: ['documents.component.css']
    })
], DocumentsComponent);
exports.DocumentsComponent = DocumentsComponent;
//# sourceMappingURL=documents.component.js.map