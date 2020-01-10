<template>
    <div class="sign-stats-detail">
        <div class="el-table el-table--border">
            <table>
                <thead>
                    <tr v-for="(columnRow, index) in theads" :key="index">
                        <th
                            v-for="(column, columnIndex) in columnRow"
                            :key="columnIndex"
                            :rowspan="column.rowspan || 1"
                            :colspan="column.colspan || 1"
                            >{{column.title}}</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="(row, tableIndex) in tableData" :key="tableIndex">
                        <template v-for="(column, columnIndex) in columns">
                            <td
                                v-if="!(columnIndex === 0 && row.rowspan === 0)"
                                :key="columnIndex"
                                :rowspan="columnIndex === 0 ? row.rowspan : 1"
                                :colspan="1"
                            >{{ row[column] }}</td>
                        </template>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import testData from './test.json';

export default {
    data() {
        return {
            tableData: [],
            dateArr: [],
        };
    },
    mounted() {},
    created() {
        // 列测试
        this.allDate('2019-11-01', '2019-12-02');

        // 行测试
        testData.result = [...testData.result, ...testData.result];
        testData.result = [...testData.result, ...testData.result];
        testData.result = [...testData.result, ...testData.result];
        // testData.result = [...testData.result, ...testData.result];

        this.handleData(testData.result);
    },
    computed: {
        columns() {
            let arr = ['rankName', 'categorieName', 'categorySponsor', 'categoryComplete', 'categoryExpired'];

            this.dateArr.map(date => {
                arr = [...arr, `${date}-sponsor`, `${date}-complete`, `${date}-expired`];
            });

            return arr;
        },
        theads() {
            if(this.tableData.length === 0) {
                return [];
            }

            // 表头两行
            let columnRow1 = [];
            let columnRow2 = [];

            columnRow1 = [
                {
                    field: 'rankName',
                    title: '法人单位名称',
                    rowspan: 2
                },
                {
                    field: 'categorieName',
                    title: '业务分类名称',
                    rowspan: 2
                },
                {
                    field: 'categorySponsor',
                    title: '已发起',
                    rowspan: 2
                },
                {
                    field: 'categoryComplete',
                    title: '已完成',
                    rowspan: 2
                },
                {
                    field: 'categoryExpired',
                    title: '已失效',
                    rowspan: 2
                }
            ];

            columnRow1 = [
                ...columnRow1,
                ...this.dateArr.map(date => {
                    return {
                        field: `${date}`,
                        title: `${date}`,
                        colspan: 3
                    }
                })
            ];

            this.dateArr.map(date => {
                columnRow2 = [
                    ...columnRow2,
                    {
                        field: `${date}-sponsor`,
                        title: `已发起`,
                    }, {
                        field: `${date}-complete`,
                        title: `已完成`
                    }, {
                        field: `${date}-expired`,
                        title: `已失效`
                    }
                ]
            });

            return [columnRow1, columnRow2];
        }
    },
    watch: {},
    methods: {
        // 处理日期
        allDate(start, end) {
            this.dateArr = [];
            let startTime = new Date(start);
            let endTime =new Date(end);
            let distanceDayLength = (endTime.getTime() - startTime.getTime()) / (1000 * 60 * 60 * 24);
            for(let i = 0; i <= distanceDayLength; i++) {
                let day = new Date(start);
                day.setDate(startTime.getDate() + i);
                this.dateArr.push(this.Utils.dateFormat(day, 'yyyyMMdd'));
            }
        },
        // 处理数据
        handleData(data) {
            this.tableData = [];
            let arr = [];

            // 总计
            data.forEach((rank, randIndex) => {
                let { rankId, rankName } = rank;
                arr = arr.concat(
                    rank.categories.map((category, categoryIndex) => {
                        let { categorieId, categorieName } = category;
                        let rowspan = categoryIndex == 0 ? rank.categories.length : 0;
                        // 已发起，已完成，已失效总和
                        let {sponsor: categorySponsor, complete: categoryComplete, expired: categoryExpired} = category.statistics['total'] || {};
                        let dateParams = {}; // 处理每日数据
                        this.dateArr.forEach(key => {
                            let { sponsor = 0, complete = 0, expired = 0 } = category.statistics[key] || {};
                            dateParams[`${key}-sponsor`] = sponsor;
                            dateParams[`${key}-complete`] = complete;
                            dateParams[`${key}-expired`] = expired;
                        });
                        return { ...dateParams,
                            rankId,
                            rankName,
                            categorieId,
                            categorieName,
                            categorySponsor,
                            categoryComplete,
                            categoryExpired,
                            rowspan
                        };
                    })
                );
            });

            this.tableData = JSON.parse(JSON.stringify(arr));
        },
    }
};
</script>

<style scoped lang="less">
.sign-stats-detail {
    padding: 16px 24px;
    overflow: auto;
}
.el-table {
    width: auto;
    overflow: auto;
}
</style>
