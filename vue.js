new Vue({
    el: '#app',
    data: {
        userName: '',
        message: '',
        commentss: JSON.parse(localStorage.getItem('comments')) || []
    },
    methods: {
        addCmnt() {
            if (this.userName.trim() !== '' && this.message.trim() !== '') {
                this.commentss.unshift({
                    username: this.userName,
                    message: this.message
                });
                localStorage.setItem('comments', JSON.stringify(this.commentss));
                this.userName = '';
                this.message = '';
            }
        }
    }
});