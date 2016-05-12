// / <reference path="../../typings/leaflet/leaflet.d.ts"/>
System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var MapService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // import {Location} from '../core/location.class';
            // import {Map, TileLayer} from 'leaflet';
            MapService = (function () {
                function MapService() {
                }
                MapService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], MapService);
                return MapService;
            }());
            exports_1("MapService", MapService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYm1hcC9tYXAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyREFBMkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUczRCxtREFBbUQ7WUFDbkQsMENBQTBDO1lBSTFDO2dCQUFBO2dCQXdCQSxDQUFDO2dCQXpCRDtvQkFBQyxpQkFBVSxFQUFFOzs4QkFBQTtnQkF5QmIsaUJBQUM7WUFBRCxDQXhCQSxBQXdCQyxJQUFBO1lBeEJELG1DQXdCQyxDQUFBIiwiZmlsZSI6IndlYm1hcC9tYXAuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9sZWFmbGV0L2xlYWZsZXQuZC50c1wiLz5cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbi8vIGltcG9ydCB7TG9jYXRpb259IGZyb20gJy4uL2NvcmUvbG9jYXRpb24uY2xhc3MnO1xuLy8gaW1wb3J0IHtNYXAsIFRpbGVMYXllcn0gZnJvbSAnbGVhZmxldCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1hcFNlcnZpY2Uge1xuICAgIC8vIG1hcDogTWFwO1xuICAgIC8vIGJhc2VNYXBzOiBhbnk7XG4gICAgLy9cbiAgICAvLyBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyAgICAgdGhpcy5iYXNlTWFwcyA9IHtcbiAgICAvLyAgICAgICAgIE9wZW5TdHJlZXRNYXA6IG5ldyBMLlRpbGVMYXllcihcImh0dHA6Ly97c30udGlsZS5vcGVuc3RyZWV0bWFwLmZyL2hvdC97en0ve3h9L3t5fS5wbmdcIiwge1xuICAgIC8vICAgICAgICAgXHRhdHRyaWJ1dGlvbjogJyZjb3B5OyA8YSBocmVmPVwiaHR0cDovL3d3dy5vcGVuc3RyZWV0bWFwLm9yZy9jb3B5cmlnaHRcIj5PcGVuU3RyZWV0TWFwPC9hPiwgVGlsZXMgY291cnRlc3kgb2YgPGEgaHJlZj1cImh0dHA6Ly9ob3Qub3BlbnN0cmVldG1hcC5vcmcvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+SHVtYW5pdGFyaWFuIE9wZW5TdHJlZXRNYXAgVGVhbTwvYT4nXG4gICAgLy8gICAgICAgICB9KSxcbiAgICAvLyAgICAgICAgIEVzcmk6IG5ldyBMLlRpbGVMYXllcignaHR0cDovL3NlcnZlci5hcmNnaXNvbmxpbmUuY29tL0FyY0dJUy9yZXN0L3NlcnZpY2VzL1dvcmxkX1RvcG9fTWFwL01hcFNlcnZlci90aWxlL3t6fS97eX0ve3h9Jywge1xuICAgIC8vICAgICAgICAgXHRhdHRyaWJ1dGlvbjogJ1RpbGVzICZjb3B5OyBFc3JpICZtZGFzaDsgRXNyaSwgRGVMb3JtZSwgTkFWVEVRLCBUb21Ub20sIEludGVybWFwLCBpUEMsIFVTR1MsIEZBTywgTlBTLCBOUkNBTiwgR2VvQmFzZSwgS2FkYXN0ZXIgTkwsIE9yZG5hbmNlIFN1cnZleSwgRXNyaSBKYXBhbiwgTUVUSSwgRXNyaSBDaGluYSAoSG9uZyBLb25nKSwgYW5kIHRoZSBHSVMgVXNlciBDb21tdW5pdHknXG4gICAgLy8gICAgICAgICB9KSxcbiAgICAvLyAgICAgICAgIENhcnRvREI6IG5ldyBMLlRpbGVMYXllcignaHR0cDovL3tzfS5iYXNlbWFwcy5jYXJ0b2Nkbi5jb20vbGlnaHRfYWxsL3t6fS97eH0ve3l9LnBuZycsIHtcbiAgICAvLyAgICAgICAgIFx0YXR0cmlidXRpb246ICcmY29weTsgPGEgaHJlZj1cImh0dHA6Ly93d3cub3BlbnN0cmVldG1hcC5vcmcvY29weXJpZ2h0XCI+T3BlblN0cmVldE1hcDwvYT4gJmNvcHk7IDxhIGhyZWY9XCJodHRwOi8vY2FydG9kYi5jb20vYXR0cmlidXRpb25zXCI+Q2FydG9EQjwvYT4nXG4gICAgLy8gICAgICAgICB9KVxuICAgIC8vICAgICB9O1xuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIGRpc2FibGVNb3VzZUV2ZW50KHRhZzogc3RyaW5nKSB7XG4gICAgLy8gICAgIHZhciBodG1sID0gTC5Eb21VdGlsLmdldCh0YWcpO1xuICAgIC8vXG4gICAgLy8gICAgIEwuRG9tRXZlbnQuZGlzYWJsZUNsaWNrUHJvcGFnYXRpb24oaHRtbCk7XG4gICAgLy8gICAgIEwuRG9tRXZlbnQub24oaHRtbCwgJ21vdXNld2hlZWwnLCBMLkRvbUV2ZW50LnN0b3BQcm9wYWdhdGlvbik7XG4gICAgLy8gfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
