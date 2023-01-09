export function showItems(item) {

    if (item.type == 'image') {
        const unit = document.createElement('div');
        unit.classList = 'items-unit';

        const image = document.createElement('img');
        image.classList = 'items-image';
        image.src = item.resource;

        const description = document.createElement('p');
        description.classList = 'items-description';
        description.textContent = item.text;

        unit.appendChild(image);
        unit.appendChild(description);

        return unit
    } else if (item.type == 'audio') {
        const unit = document.createElement('div');
        unit.classList = 'items-unit';

        const audio = document.createElement('audio');
        audio.classList = 'items-audio';
        audio.src = item.resource;
        audio.controls = true;

        const description = document.createElement('p');
        description.classList = 'items-description';
        description.textContent = item.text;

        unit.appendChild(audio);
        unit.appendChild(description);

        return unit
    } else {
        const unit = document.createElement('div');
        unit.classList = 'items-unit';

        const video = document.createElement('video');
        video.classList = 'items-video';
        video.src = item.resource;
        video.controls = true;

        const description = document.createElement('p');
        description.classList = 'items-description';
        description.textContent = item.text;

        unit.appendChild(video);
        unit.appendChild(description);

        return unit
    }
}