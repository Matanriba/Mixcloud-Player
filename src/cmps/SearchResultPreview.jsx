import { useSelector } from "react-redux"

export const ResultPreview = ({ result, setCurrTrack, isTile }) => {

    const { currChosenTrack } = useSelector(state => state.searchModule)


    const onSetCurrTrack = () => {
        setCurrTrack(result.id)
    }

    return (
        <>
            {(!isTile) && <p className={`result-preview txt ${(currChosenTrack && currChosenTrack.id === result.id) ? 'chosen-p' : ''}`} key={result.id} onClick={() => onSetCurrTrack(result.id)}>{(result.songName.length > 50) ? result.songName.substring(0, 50) + '...' : result.songName}</p>}
            {(isTile) && <img className={`result-preview ${(currChosenTrack && currChosenTrack.id === result.id) ? 'chosen-tile' : ''}`} src={result.pic} alt="Track preview" onClick={() => onSetCurrTrack(result.id)}/>}
        </>

    )
}