<template>
    <li>{{fromNow}} 【{{duration}} {{getUnits}}】</li>
</template>

<script>
    import {unitOfTime} from "moment";

    const moment = require('moment')

    export default {
        name: "time-diff",
        props: {
            date: String,
            units: {
                type: unitOfTime,
                default: 'day'
            }
        },
        computed: {
            fromNow: function () {
                let temp = new moment(this.date, 'YYYY-MM-DD HH:mm:ss');
                let time = new moment().diff(temp);

                let second = moment.duration(time).seconds();
                let minute = moment.duration(time).minutes();
                let hour = moment.duration(time).hours();
                let day = moment.duration(time).days();
                let month = moment.duration(time).months();
                let year = moment.duration(time).years();

                let duration = second + " 秒";
                if (minute > 0) {
                    duration = minute + " 分钟 " + duration;
                }
                if (hour > 0) {
                    duration = hour + " 小时 " + duration;
                }
                if (day > 0) {
                    duration = day + " 天 " + duration;
                }
                if (month > 0) {
                    duration = month + " 月 " + duration;
                }
                if (year > 0) {
                    duration = year + " 年 " + duration;
                }
                return duration;
            },
            duration: function () {
                let temp = new moment(this.date, 'YYYY-MM-DD');
                return moment().diff(temp, this.units)
            },
            getUnits: function () {
                switch (this.units) {
                    case 'year':
                        return '年';
                    case 'month':
                        return '月';
                    case 'day':
                        return '天';
                    case 'hour':
                        return '时';
                    case 'minute':
                        return '分';
                    case 'second':
                        return '秒';
                    case 'millisecond':
                        return '毫秒';
                }
            }
        }
    }
</script>

<style scoped>

</style>
