export default {
    data() {
        return {
            timerId: null // 定时任务序号
        }
    },
    beforeDestroy() {
        clearInterval(this.intervalId);
        clearTimeout(this.timerId);
    },
	created() {
        const INTERVAL_LIMIT = 10000;

        this.timerId = setTimeout(() => {
            clearInterval(this.intervalId);
        }, INTERVAL_LIMIT);
    }
}
