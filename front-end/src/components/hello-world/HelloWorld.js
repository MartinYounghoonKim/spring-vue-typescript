export default {
    name: 'hello-world',
    data () {
        return {
            msg: '테스트',
        }
    },
    methods: {
        clickHandler () {
            this.msg = '변경';
        }
    }
}