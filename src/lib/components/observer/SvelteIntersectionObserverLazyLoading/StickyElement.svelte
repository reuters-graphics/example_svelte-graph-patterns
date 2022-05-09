<script>
	import { currentElNum } from './stores.js';
</script>

<div id='sticky-element'>
	I am a sticky element and I update based on the intersecting element, which is:
	<h3>{$currentElNum}</h3>
</div>

<style lang='scss'>
      @import '../../../styles/global.scss';
	#sticky-element {
            position: -webkit-sticky;
            position: sticky;
            top: 0px;
            z-index: 10;
            background-color: #fff;
            width: 260px;
            height: 120px;
            margin: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 25px;
            box-shadow: 0 0 0.75rem rgb(216, 216, 216);
            color: $dark-color;
            font-size: 1.2rem;
	}
	h3 {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: $accent-color;
		width: 30px;
		height: 30px;
		border-radius: 50%;
		color: white;
}
</style>