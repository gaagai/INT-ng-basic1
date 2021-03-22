import {Component, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {AlbumsService} from '../../services/albums.service';
import {Album} from '../../album';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy, OnChanges {
    @Input() newUser: boolean | undefined;

    albumsBackup: Album[] = [];
    albums: Album[] = [];
    albumSub: any;

    constructor(private albumsService: AlbumsService) {
    }

    ngOnInit(): void {
        this.albumSub = this.albumsService.getAlbums()
            .subscribe((data: Album[]) => {
                this.albumsBackup = data;
                this.albums = this.albumsBackup.slice(0, 10);
            });
    }

    ngOnDestroy(): void {
        this.albumSub.unsubscribe();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (!this.newUser) {
            this.albums = this.albumsBackup.slice(0, 4);
        } else {
            this.albums = this.albumsBackup.slice(0, 10);
        }
    }
}
