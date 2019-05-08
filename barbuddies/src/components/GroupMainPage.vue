
<template>
    <div class="GroupMainPage">
        <NavBar/>
        <br />
        <br />
        <br />
        <br />
        <div class="container">
            <h1>MY GROUPS</h1>
            <br />
            <br />
            <div class="jumbotron" id="group1">
                <a href="#"><h1>Group 1</h1></a>
                    <div>
                        <a href="#" class="float-right">
                            <h3 id="numOfPpl">3
                                <img src="../assets/groupicon.png" class="groupicon" alt="group icon">
                            </h3>
                            
                        </a>
                    </div>
            </div>
            <div class="jumbotron" id="group2">
                <a href="#"><h1>Group 2</h1></a>
                <div>
                        <a href="#" class="float-right">
                            <h3 id="numOfPpl">3
                                <img src="../assets/groupicon.png" class="groupicon" alt="group icon">
                            </h3>
                            
                        </a>
                    </div>
            </div>

        </div>
    </div>
</template>


<script>
    import NavBar from './NavBar'

    export default {
        name: 'App',
        components: {
            NavBar
        }
    }         

</script>
<style scoped>

    a h1 {
        color: black;
    }
    a h1:hover {
        color: gray;
    }
    a:hover {
        text-decoration: none;
    }

    .groupicon {
        height: 30px;
        width: 40px;
        margin-left: 10px;
    }

  
    
</style>


