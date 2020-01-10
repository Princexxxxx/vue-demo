<template>
    <div class="main">
        <el-table
            :data="tableData"
            :span-method="objectSpanMethod"
            border
            style="width: 100%; margin-top: 20px"
        >
            <el-table-column prop="name" label="法人单位名称" width="120" fixed></el-table-column>
            <el-table-column prop="category" label="业务分类名称" width="120" fixed></el-table-column>
            <el-table-column prop="creator" label="creator" width="160" class-name="fluid"></el-table-column>
            <el-table-column prop="templateType" label="templateType" width="180" class-name="fluid"></el-table-column>
            <el-table-column prop="companyId" label="companyId" width="240" class-name="fluid"></el-table-column>
            <el-table-column prop="childId" label="childId" width="240" class-name="fluid"></el-table-column>
            <el-table-column prop="createTime" label="createTime" width="200" class-name="fluid"></el-table-column>
            <el-table-column prop="updateTime" label="updateTime" width="200" class-name="fluid"></el-table-column>
        </el-table>
    </div>
</template>

<script>
import mockData from './tree.json';

export default {
    data() {
        return {
            mockTree: [],
            tableData: []
        };
    },
    created() {
        this.initMockData();
    },
    methods: {
        initMockData() {
            const { data: treeData } = mockData;

            treeData.forEach(parent => {
                this.tableData = this.tableData.concat(
                    parent.children.map(child => {
                        const { id, name } = parent;

                        return { id, name, ...child };
                    })
                );
            });

            this.mockTree = treeData; // Debug
        },
        objectSpanMethod({ row, column, rowIndex, columnIndex }) {
            const { data: treeData } = mockData;

            if (columnIndex === 0) {
                const node = treeData.find(item => item.id == row.id); // 父节点
                const childIndex = node.children.findIndex(item => item.childId == row.childId ); // 子节点索引

                return {
                    rowspan: childIndex === 0 ? node.children.length : 0,
                    colspan: 1
                };
            }
        }
    }
};
</script>

<style>
.main {
    width: 1000px;
    margin: 0 auto;
}
tbody tr td:first-child {
    vertical-align: top;
}
tbody tr td[rowspan='1'] {
    vertical-align: middle;
}
tbody tr td {
    border: none !important;
}
tbody tr:nth-child(2) td {
    border-right: 1px solid #ebeef5;
}

.el-table__fixed {
    box-shadow: none;
    border-right: 1px solid #ebeef5;
}
.el-table th {
    padding: 8px 0;
}
.el-table td {
    padding: 5px 0;
}
th.fluid {
    background-color: rgba(245,247,250,1);
}
tr:hover > td {
    background-color: transparent !important;
}
tr.hover-row > td {
    background-color: transparent !important;
}
</style>
