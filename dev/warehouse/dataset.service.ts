import {Injectable} from '@angular/core';
import {RegionalDataset} from './dataset.schema';

@Injectable()
export class DatasetService {

  // constructor(private _http: Http) {}
  // getDataByGeography(): Observable<RegionalDataset>{
  //     console.log('getting json?');
  //     return this._http.get('/app/json/MOCK_DATA_1.json').map(response => response.json());
  // }

  getDataByGeography(s:string){
    if (s === 'reg'){
      return regional_dataset;
    } else if (s === 'lim') {
      return limestone_dataset;
    } else if (s === 'mor') {
      return morgan_dataset;
    } else if (s === 'mad') {
      return madison_dataset;
    }
  }
}


let regional_dataset: Array<RegionalDataset> = [{"name":"Skänninge","icon":"http://dummyimage.com/200x200.png/cc0000/ffffff","link":"TempusVivamusIn.map","date":"7/9/2015"},
{"name":"Sebuku","icon":"http://dummyimage.com/200x200.gif/ff4444/ffffff","link":"ImperdietNullam.txt","date":"6/25/2015"},
{"name":"Shisui","icon":"http://dummyimage.com/200x200.gif/5fa2dd/ffffff","link":"VitaeConsectetuerEget.shp","date":"10/22/2015"},
{"name":"Harjavalta","icon":"http://dummyimage.com/200x200.png/5fa2dd/ffffff","link":"IpsumPrimis.shp","date":"4/28/2016"},
{"name":"Mafraq","icon":"http://dummyimage.com/200x200.gif/ff4444/ffffff","link":"NullaMollisMolestie.txt","date":"4/28/2016"},
{"name":"Comagascas","icon":"http://dummyimage.com/200x200.jpg/cc0000/ffffff","link":"Ipsum.map","date":"6/24/2015"},
{"name":"Briey","icon":"http://dummyimage.com/200x200.gif/5fa2dd/ffffff","link":"DonecUt.shp","date":"3/11/2016"},
{"name":"Stockholm","icon":"http://dummyimage.com/200x200.jpg/5fa2dd/ffffff","link":"AnteIpsum.map","date":"10/22/2015"},
{"name":"Jinhu","icon":"http://dummyimage.com/200x200.jpg/cc0000/ffffff","link":"CrasMiPede.map","date":"7/28/2015"},
{"name":"Caucete","icon":"http://dummyimage.com/200x200.png/cc0000/ffffff","link":"Molestie.shp","date":"9/27/2015"},
{"name":"Bagé","icon":"http://dummyimage.com/200x200.jpg/ff4444/ffffff","link":"Augue.map","date":"9/18/2015"},
{"name":"Nobeoka","icon":"http://dummyimage.com/200x200.gif/ff4444/ffffff","link":"Sapien.png","date":"8/17/2015"},
{"name":"Miandrivazo","icon":"http://dummyimage.com/200x200.png/dddddd/000000","link":"Non.shp","date":"11/18/2015"},
{"name":"Cockburn Town","icon":"http://dummyimage.com/200x200.gif/cc0000/ffffff","link":"DignissimVestibulum.map","date":"4/17/2016"},
{"name":"Shahrak","icon":"http://dummyimage.com/200x200.jpg/cc0000/ffffff","link":"VariusInteger.map","date":"9/23/2015"},
{"name":"Chengzihe","icon":"http://dummyimage.com/200x200.gif/5fa2dd/ffffff","link":"ViverraEgetCongue.png","date":"9/21/2015"},
{"name":"Sishilichengzi","icon":"http://dummyimage.com/200x200.png/dddddd/000000","link":"Orci.shp","date":"1/7/2016"},
{"name":"Riachão do Jacuípe","icon":"http://dummyimage.com/200x200.gif/ff4444/ffffff","link":"Sapien.shp","date":"2/29/2016"},
{"name":"Naga","icon":"http://dummyimage.com/200x200.png/cc0000/ffffff","link":"LectusSuspendissePotenti.map","date":"12/25/2015"},
{"name":"Tatsunochō-tominaga","icon":"http://dummyimage.com/200x200.gif/cc0000/ffffff","link":"Felis.tiff","date":"10/14/2015"}];
let limestone_dataset: Array<RegionalDataset> = [{"name":"Cikupa","icon":"http://dummyimage.com/200x200.gif/cc0000/ffffff","link":"NibhIn.shp","date":"10/17/2015"},
{"name":"Damiao","icon":"http://dummyimage.com/200x200.jpg/dddddd/000000","link":"Augue.map","date":"4/11/2016"},
{"name":"Elverum","icon":"http://dummyimage.com/200x200.png/cc0000/ffffff","link":"AdipiscingMolestie.shp","date":"9/27/2015"},
{"name":"Alto del Espino","icon":"http://dummyimage.com/200x200.gif/dddddd/000000","link":"OrciMauris.mov","date":"8/24/2015"},
{"name":"Rebrikha","icon":"http://dummyimage.com/200x200.gif/cc0000/ffffff","link":"Sagittis.shp","date":"10/21/2015"},
{"name":"Qianjin","icon":"http://dummyimage.com/200x200.gif/ff4444/ffffff","link":"A.map","date":"5/20/2015"},
{"name":"Kendari","icon":"http://dummyimage.com/200x200.gif/cc0000/ffffff","link":"Congue.png","date":"2/11/2016"},
{"name":"Nova Russas","icon":"http://dummyimage.com/200x200.jpg/ff4444/ffffff","link":"CongueElementum.map","date":"7/8/2015"},
{"name":"Ivot","icon":"http://dummyimage.com/200x200.jpg/cc0000/ffffff","link":"NullaSed.map","date":"3/30/2016"},
{"name":"Kleszczewo","icon":"http://dummyimage.com/200x200.gif/cc0000/ffffff","link":"Ultrices.map","date":"12/16/2015"},
{"name":"Hesperange","icon":"http://dummyimage.com/200x200.gif/5fa2dd/ffffff","link":"Ultrices.txt","date":"3/29/2016"},
{"name":"Mlawe","icon":"http://dummyimage.com/200x200.gif/dddddd/000000","link":"Porttitor.txt","date":"9/9/2015"},
{"name":"Gelsenkirchen","icon":"http://dummyimage.com/200x200.jpg/5fa2dd/ffffff","link":"NullaUltrices.txt","date":"4/29/2016"},
{"name":"La Labor","icon":"http://dummyimage.com/200x200.gif/cc0000/ffffff","link":"Enim.txt","date":"1/16/2016"},
{"name":"Manacsac","icon":"http://dummyimage.com/200x200.png/cc0000/ffffff","link":"Maecenas.map","date":"7/13/2015"},
{"name":"Achiras","icon":"http://dummyimage.com/200x200.png/cc0000/ffffff","link":"Quam.shp","date":"3/5/2016"},
{"name":"Alimono","icon":"http://dummyimage.com/200x200.png/ff4444/ffffff","link":"Sed.shp","date":"12/7/2015"},
{"name":"Tocok","icon":"http://dummyimage.com/200x200.png/5fa2dd/ffffff","link":"PhasellusSit.gif","date":"11/2/2015"},
{"name":"Rancabolang","icon":"http://dummyimage.com/200x200.png/dddddd/000000","link":"TellusNulla.tiff","date":"3/9/2016"},
{"name":"Marseille","icon":"http://dummyimage.com/200x200.gif/dddddd/000000","link":"Ipsum.gif","date":"5/23/2015"}];
let morgan_dataset: Array<RegionalDataset> = [{"name":"Zvenigorod","icon":"http://dummyimage.com/200x200.png/cc0000/ffffff","link":"SapienIaculis.tiff","date":"9/21/2015"},
{"name":"Briceni","icon":"http://dummyimage.com/200x200.png/cc0000/ffffff","link":"CongueEtiam.shp","date":"5/1/2016"},
{"name":"San Jose","icon":"http://dummyimage.com/200x200.jpg/cc0000/ffffff","link":"EtiamFaucibus.map","date":"8/1/2015"},
{"name":"Artsvaberd","icon":"http://dummyimage.com/200x200.jpg/cc0000/ffffff","link":"MetusAenean.map","date":"7/7/2015"},
{"name":"Mujur","icon":"http://dummyimage.com/200x200.png/5fa2dd/ffffff","link":"UtRhoncus.png","date":"9/24/2015"},
{"name":"Melíti","icon":"http://dummyimage.com/200x200.png/dddddd/000000","link":"OdioPorttitorId.shp","date":"11/21/2015"},
{"name":"Bourg-en-Bresse","icon":"http://dummyimage.com/200x200.gif/5fa2dd/ffffff","link":"Pede.shp","date":"7/22/2015"},
{"name":"Zhonggang","icon":"http://dummyimage.com/200x200.png/ff4444/ffffff","link":"DiamNamTristique.gif","date":"6/14/2015"},
{"name":"Phu Khiao","icon":"http://dummyimage.com/200x200.gif/5fa2dd/ffffff","link":"NislAenean.shp","date":"11/26/2015"},
{"name":"Cinyawang","icon":"http://dummyimage.com/200x200.png/5fa2dd/ffffff","link":"SapienUrnaPretium.shp","date":"8/24/2015"},
{"name":"Cergy-Pontoise","icon":"http://dummyimage.com/200x200.png/cc0000/ffffff","link":"Pede.map","date":"3/29/2016"},
{"name":"Venado Tuerto","icon":"http://dummyimage.com/200x200.jpg/ff4444/ffffff","link":"Morbi.tiff","date":"3/8/2016"},
{"name":"Göteborg","icon":"http://dummyimage.com/200x200.gif/5fa2dd/ffffff","link":"ElitProinRisus.map","date":"6/8/2015"},
{"name":"Jatinagara Kulon","icon":"http://dummyimage.com/200x200.jpg/ff4444/ffffff","link":"EgetEleifend.map","date":"11/23/2015"},
{"name":"Karanganyar","icon":"http://dummyimage.com/200x200.gif/5fa2dd/ffffff","link":"QuamTurpis.shp","date":"10/21/2015"},
{"name":"Donggaocun","icon":"http://dummyimage.com/200x200.png/5fa2dd/ffffff","link":"OdioJusto.map","date":"11/4/2015"},
{"name":"Subrag","icon":"http://dummyimage.com/200x200.png/5fa2dd/ffffff","link":"VestibulumVestibulum.map","date":"7/11/2015"},
{"name":"Uíge","icon":"http://dummyimage.com/200x200.jpg/dddddd/000000","link":"MagnaVestibulum.map","date":"1/31/2016"},
{"name":"Kępie Żaleszańskie","icon":"http://dummyimage.com/200x200.gif/dddddd/000000","link":"Tincidunt.shp","date":"9/5/2015"},
{"name":"Xiahong","icon":"http://dummyimage.com/200x200.png/dddddd/000000","link":"VenenatisLacinia.map","date":"11/27/2015"}];
let madison_dataset: Array<RegionalDataset> = [{"name":"Maogou","icon":"http://dummyimage.com/200x200.jpg/5fa2dd/ffffff","link":"UltricesLibero.map","date":"11/24/2015"},
{"name":"Sölvesborg","icon":"http://dummyimage.com/200x200.gif/ff4444/ffffff","link":"Amet.txt","date":"1/4/2016"},
{"name":"Bangeran","icon":"http://dummyimage.com/200x200.png/dddddd/000000","link":"BlanditMi.shp","date":"3/31/2016"},
{"name":"Сарај","icon":"http://dummyimage.com/200x200.jpg/cc0000/ffffff","link":"NatoquePenatibusEt.shp","date":"8/12/2015"},
{"name":"Itabaiana","icon":"http://dummyimage.com/200x200.jpg/5fa2dd/ffffff","link":"ImperdietSapien.txt","date":"11/10/2015"},
{"name":"Bené Beraq","icon":"http://dummyimage.com/200x200.jpg/cc0000/ffffff","link":"Cubilia.map","date":"8/1/2015"},
{"name":"Gromnik","icon":"http://dummyimage.com/200x200.gif/dddddd/000000","link":"Iaculis.map","date":"5/2/2016"},
{"name":"Sunan","icon":"http://dummyimage.com/200x200.gif/dddddd/000000","link":"TortorId.shp","date":"2/26/2016"},
{"name":"Ngã Bảy","icon":"http://dummyimage.com/200x200.png/5fa2dd/ffffff","link":"Elit.map","date":"7/5/2015"},
{"name":"Donja Mahala","icon":"http://dummyimage.com/200x200.png/dddddd/000000","link":"VenenatisTristiqueFusce.map","date":"9/26/2015"},
{"name":"Shchëkino","icon":"http://dummyimage.com/200x200.jpg/ff4444/ffffff","link":"LuctusUltriciesEu.shp","date":"7/25/2015"},
{"name":"Drybin","icon":"http://dummyimage.com/200x200.png/dddddd/000000","link":"NislVenenatisLacinia.map","date":"3/18/2016"},
{"name":"Dingzhai","icon":"http://dummyimage.com/200x200.jpg/cc0000/ffffff","link":"InFaucibusOrci.map","date":"1/13/2016"},
{"name":"Molteno","icon":"http://dummyimage.com/200x200.jpg/dddddd/000000","link":"LectusPellentesqueAt.map","date":"8/6/2015"},
{"name":"Beishan","icon":"http://dummyimage.com/200x200.png/cc0000/ffffff","link":"NisiVulputate.tiff","date":"10/19/2015"},
{"name":"Cerro","icon":"http://dummyimage.com/200x200.gif/5fa2dd/ffffff","link":"GravidaSem.map","date":"6/29/2015"},
{"name":"Bucaramanga","icon":"http://dummyimage.com/200x200.png/cc0000/ffffff","link":"PurusAliquet.txt","date":"8/2/2015"},
{"name":"Zhuangbu","icon":"http://dummyimage.com/200x200.png/5fa2dd/ffffff","link":"PosuereCubilia.shp","date":"7/22/2015"},
{"name":"Eloy Alfaro","icon":"http://dummyimage.com/200x200.jpg/ff4444/ffffff","link":"Non.shp","date":"1/2/2016"},
{"name":"Sijihong","icon":"http://dummyimage.com/200x200.gif/5fa2dd/ffffff","link":"NullamVarius.shp","date":"6/21/2015"}];
