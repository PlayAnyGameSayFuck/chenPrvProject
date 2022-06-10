<template>
    <div class="weather">
        <div class="weather_head">
            天气区域选择
            <hr width="100%" />
            <div class="weather_area">
                省份：<select id="weather_province" @change="weather_province_select($event)">
                        <option v-for="(item,index) in weatherProvince" :key="index" :value="item.code">{{item.name}}</option>
                    </select>
                城市：<select id="weather_city" @change="weather_city_select($event)">
                        <option>市</option>
                        <option v-for="(item,index) in weatherCity" :key="index" :value="item.code">{{item.name}}</option>
                    </select>
                地级市：<select id="weather_county" @change="weather_county_select($event)">
                        <option>市/县/区</option>
                        <option v-for="(item,index) in weatherCounty" :key="index" :value="item.code">{{item.name}}</option>
                    </select>
            </div>
        </div>
        <hr>
        <div class="third_station_content" id="third_station_content">
            <iframe :src="url" class="third_station_content" width="100%" height="2400" 
                frameborder="0" scrolling="no" allowtransparency="yes"></iframe>
        </div>
    </div>
</template>
<script>

export default {
  name: 'Weather',
  data(){
      return {
          baseUrl: 'https://weathernew.pae.baidu.com/weathernew/pc',
          weatherProvince: [],
          weatherCity: [],
          weatherCounty: [],
          province: [],
          city: [],
          county: [],
          url: '',
      }
  },
  created(){
        this.province.push({name: "河北省", code: "13", queryName: "河北"},{name: "北京", code: "11", queryName: "北京"});
        this.city.push({name: "石家庄市", code: "1301", queryName: "石家庄"},{name: "邯郸市", code: "1304", queryName: "邯郸"},
            {name: "北京市", code: "1101", queryName: ""});
        this.county.push({name: "武安市", code: "130481100000", queryName: "武安"});
        if(this.province && this.province.length>0){
            for(var i=0; i<this.province.length;i++){
                this.weatherProvince.push(this.province[i]);
            }
        }
        if(this.city && this.city.length>0){
            for(var i=0;i<this.city.length;i++){
                if(this.city[i].code.substring(0,2) == this.weatherProvince[0].code){
                    this.weatherCity.push(this.city[i]);
                }
            }
        }
        this.url = this.baseUrl;
        this.url += '?query=' + this.weatherProvince[0].queryName + "天气&srcid=4982";
  },
  methods: {
      weather_province_select(event){
          this.weatherCity = [];
          let code = event.path[0].value;
          if(this.city && this.city.length>0){
            for(var i=0;i<this.city.length;i++){
                if(this.city[i].code.substring(0, 2) == code.substring(0, 2)){
                    this.weatherCity.push(this.city[i]);
                }
            }
          }
          for(var i=0;i<this.weatherProvince.length;i++){
            if(code == this.weatherProvince[i].code){
                this.url = this.baseUrl;
                this.url += '?query=' + this.weatherProvince[i].queryName + "天气&srcid=4982";
             }
          }
      },
      weather_city_select(event){
          this.weatherCounty = [];
          let code = event.path[0].value;
          let provinceQueryStr = '';
          for(var i=0;i<this.county.length;i++){
                if(this.county[i].code.substring(0, 4) == code.substring(0, 4)){
                    this.weatherCounty.push(this.county[i]);
                }
          }
          for(var i=0;i<this.weatherProvince.length;i++){
                if(code.substring(0, 2) == this.weatherProvince[i].code.substring(0, 2)){
                    provinceQueryStr += '?query=' + this.weatherProvince[i].queryName;
                }
          }
          for(var i=0;i<this.weatherCity.length;i++){
                if(code == this.weatherCity[i].code){
                    this.url = this.baseUrl;
                    this.url += provinceQueryStr + this.weatherCity[i].queryName + "天气&srcid=4982";
                }
          }
      },
      weather_county_select(event){
          let code = event.path[0].value;
          let provinceQueryStr = '';
          let cityQueryStr = '';
          for(var i=0;i<this.weatherProvince.length;i++){
                if(code.substring(0, 2) == this.weatherProvince[i].code.substring(0, 2)){
                    provinceQueryStr += '?query=' + this.weatherProvince[i].queryName;
                }
          }
          for(var i=0;i<this.weatherCity.length;i++){
                if(code.substring(0, 4) == this.weatherCity[i].code.substring(0, 4)){
                    cityQueryStr += this.weatherCity[i].queryName;
                }
          }
          for(var i=0;i<this.weatherCounty.length;i++){
                if(code == this.weatherCounty[i].code){
                    this.url = this.baseUrl;
                    this.url += provinceQueryStr + cityQueryStr + this.weatherCounty[i].queryName + "天气&srcid=4982";
                }
          }
      },
  },
}
</script>
<style scoped="scoped">
.weather {
    border: 0px;
    overflow: hidden;
}
.weather_head {
    background: none;
    padding-top: 10px;
    padding-left: 20px;
    font-family: cursive;
    font-size: 16px;
}
.weather_area {
    padding-left: 20px;
}
select {
    border: 0px;
    cursor: pointer;
    padding-left: 8px;
    padding-right: 8px;
    height: 25px;
    color: gray;
    outline-color: rgb(180, 207, 231);
    margin-right: 20px;
}
option {
    cursor: pointer;
    border: 0px;
    outline-color: none;
    outline-style: none;
    outline: none;
    border-style: none;
}
.query_weather {
    width: 60px;
    height: 25px;
    cursor: pointer;
    margin-left: 120px;
    border: 3px solid rgb(215, 217, 220);
    background: none;
    outline-style: none;
}
.query_weather:hover {
    border: 3px solid rgb(181, 182, 185);
}
.third_station_content {
    border-radius: 2em  ;
}
</style>